import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const resumeOptions = {
    pt: {
        code: 'pt',
        label: 'Portuguese',
        fileName: 'resume-pt.md',
        downloadLabel: 'Download PT'
    },
    en: {
        code: 'en',
        label: 'English',
        fileName: 'resume-en.md',
        downloadLabel: 'Download EN'
    }
} as const;

type ResumeLanguage = keyof typeof resumeOptions;

function getResumeUrl(fileName: string) {
    return `${process.env.PUBLIC_URL || ''}/resumes/${fileName}`;
}

export default function ResumesPage() {
    const [language, setLanguage] = useState<ResumeLanguage>('pt');
    const [markdown, setMarkdown] = useState('');
    const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

    useEffect(() => {
        const controller = new AbortController();
        const currentResume = resumeOptions[language];

        setStatus('loading');

        globalThis.fetch(getResumeUrl(currentResume.fileName), { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Unable to load ${currentResume.fileName}`);
                }

                return response.text();
            })
            .then((content) => {
                setMarkdown(content);
                setStatus('ready');
            })
            .catch((error: Error & { name?: string }) => {
                if (error.name === 'AbortError') {
                    return;
                }

                setMarkdown('');
                setStatus('error');
            });

        return () => {
            controller.abort();
        };
    }, [language]);

    return (
        <main className="resume-page">
            <section className="resume-shell">
                <div className="resume-header">
                    <div>
                        <h1>Resumes</h1>
                        <p>
                            Download the Markdown files or preview each version directly on the site.
                        </p>
                    </div>
                    <div className="resume-actions">
                        <a className="resume-action" href="/">
                            Back home
                        </a>
                        {(Object.keys(resumeOptions) as ResumeLanguage[]).map((key) => {
                            const resume = resumeOptions[key];

                            return (
                                <a
                                    key={resume.code}
                                    className="resume-action"
                                    href={getResumeUrl(resume.fileName)}
                                    download
                                >
                                    {resume.downloadLabel}
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="resume-language-switcher" role="tablist" aria-label="Resume languages">
                    {(Object.keys(resumeOptions) as ResumeLanguage[]).map((key) => {
                        const resume = resumeOptions[key];
                        const isActive = language === key;

                        return (
                            <button
                                key={resume.code}
                                className={`resume-language-button${isActive ? ' is-active' : ''}`}
                                type="button"
                                onClick={() => setLanguage(key)}
                                aria-pressed={isActive}
                            >
                                Preview {resume.label}
                            </button>
                        );
                    })}
                </div>

                {status === 'loading' && <p className="resume-status">Loading resume...</p>}
                {status === 'error' && <p className="resume-status">Could not load the Markdown file.</p>}
                {status === 'ready' && (
                    <article className="resume-preview">
                        <ReactMarkdown>{markdown}</ReactMarkdown>
                    </article>
                )}
            </section>
        </main>
    );
}
