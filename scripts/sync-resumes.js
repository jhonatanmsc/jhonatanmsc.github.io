const fs = require('node:fs');
const path = require('node:path');
const { mdToPdf } = require('md-to-pdf');

const resumesDir = path.join(__dirname, '..', 'public', 'resumes');

async function run() {
    for (const fileName of fs.readdirSync(resumesDir)) {
        if (!fileName.endsWith('.md')) {
            continue;
        }

        const sourceFile = path.join(resumesDir, fileName);
        const pdfFileName = fileName.replace(/\.md$/, '.pdf');
        const pdfFile = path.join(resumesDir, pdfFileName);
        const pdf = await mdToPdf({ path: sourceFile }, {
            pdf_options: {
                margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
                format: 'A4',
            },
            stylesheet_encoding: 'utf-8',
            css: `
                body { font-size: 11px; line-height: 1.35; }
                h1   { font-size: 20px; margin-bottom: 4px; }
                h2   { font-size: 14px; margin-top: 10px; margin-bottom: 3px; }
                h3   { font-size: 12px; margin-top: 6px; margin-bottom: 2px; }
                p, li { margin-bottom: 2px; }
                ul   { padding-left: 16px; margin-bottom: 4px; }
                hr   { margin: 6px 0; }
            `,
        });
        fs.writeFileSync(pdfFile, pdf.content);
        console.log(`Built   ${pdfFileName}`);
    }

    console.log('PDFs generated in public/resumes');
}

run().catch((err) => {
    console.error('sync-resumes failed:', err.message);
    process.exit(1);
});
