import axios from 'axios';

/** POST the application. Resolves with the decision, score, rules and offer. */
export async function submitApplication(payload) {
  const { data } = await axios.post('/api/applications', payload);
  return data;
}

/**
 * Opens a Server-Sent Events stream for the explanation text.
 * Returns a function that closes the stream.
 *
 * Server events: meta (which source wrote it), token (next piece of text),
 * done (finished) and failure (something went wrong mid-stream).
 */
export function openExplanationStream(id, { onMeta, onToken, onDone, onFailure }) {
  const source = new EventSource(`/api/applications/${id}/explanation`);
  let finished = false;
  const finish = () => {
    finished = true;
    source.close(); // closing stops EventSource from auto-reconnecting
  };

  source.addEventListener('meta', (e) => onMeta(JSON.parse(e.data)));
  source.addEventListener('token', (e) => onToken(JSON.parse(e.data)));
  source.addEventListener('done', () => {
    finish();
    onDone();
  });
  source.addEventListener('failure', (e) => {
    finish();
    onFailure(JSON.parse(e.data).message);
  });
  source.onerror = () => {
    if (finished) return;
    finish();
    onFailure('The connection to the server was lost.');
  };

  return finish;
}
