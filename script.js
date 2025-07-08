document.addEventListener('DOMContentLoaded', () => {
    const pdfGrid = document.getElementById('pdf-grid');

    // Simulate PDF data - in a real application, this would come from a backend API
    const pdfFiles = [
        { name: 'Unit 2_ Spectroscopic Techniques and Applications & Stereochemistry', file: 'Unit 2_ Spectroscopic Techniques and Applications & Stereochemistry.pdf' },
        { name: 'Unit 3_ Engineering Chemistry Notes', file: 'Unit 3_ Engineering Chemistry Notes.pdf' },
        { name: 'Unit 4_ Water Technology and Fuels & Combustion', file: 'Unit 4_ Water Technology and Fuels & Combustion.pdf' },
        { name: 'UNIT 5_ MATERIALS CHEMISTRY (POLYMERS AND ORGANOMETALLIC COMPOUNDS)', file: 'UNIT 5_ MATERIALS CHEMISTRY (POLYMERS AND ORGANOMETALLIC COMPOUNDS).pdf' },
        { name: 'Unit I_ Carbon Allotropes and Nanomaterials (1)', file: 'Unit I_ Carbon Allotropes and Nanomaterials (1).pdf' }
    ];

    pdfFiles.forEach(pdf => {
        const pdfCard = document.createElement('div');
        pdfCard.classList.add('pdf-card');
        pdfCard.innerHTML = `
            <i class="fas fa-file-pdf"></i>
            <h2>${pdf.name}</h2>
        `;
        pdfCard.addEventListener('click', () => {
            // Open the PDF in a new tab. Assuming PDFs are in the same directory as index.html for simplicity.
            // In a real scenario, you might have a dedicated /pdfs/ folder and adjust the path.
            window.open(`pdfs/${pdf.file}`, '_blank');
        });
        pdfGrid.appendChild(pdfCard);
    });
});
