import { useState } from 'react';
import { submitApplication } from './api.js';
import ApplicationForm from './components/ApplicationForm.jsx';
import ResultPanel from './components/ResultPanel.jsx';

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');

  async function handleSubmit(payload) {
    setLoading(true);
    setErrors({});
    setApiError('');
    try {
      setResult(await submitApplication(payload));
    } catch (err) {
      if (err.response?.status === 400) {
        setErrors(err.response.data.errors);
        setApiError('Fix the highlighted fields and evaluate again.');
      } else {
        setApiError('Could not reach the API. Check that the server is running on port 5000.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <header className="top">
        <h1>Micro-Credit Approval Engine</h1>
        <p>Score a loan application, see which rules fired, and read the explanation as Claude writes it.</p>
      </header>
      <main className="layout">
        <ApplicationForm onSubmit={handleSubmit} loading={loading} errors={errors} />
        <div>
          {apiError && <p className="banner" role="alert">{apiError}</p>}
          {result ? (
            <ResultPanel result={result} />
          ) : (
            <section className="card empty">
              <h2>No application evaluated yet</h2>
              <p className="muted">Load one of the samples on the left, or enter an application, then choose Evaluate application.</p>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
