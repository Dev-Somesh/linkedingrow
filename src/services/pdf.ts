import { jsPDF } from 'jspdf';
import * as pdfjsLib from 'pdfjs-dist';

// Initialize PDF.js worker with the correct version
const workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

export const extractTextFromPDF = async (file: File): Promise<string> => {
  try {
    // Load and parse the PDF file
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    
    let fullText = '';
    
    // Extract text from each page
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => item.str)
        .join(' ');
      fullText += pageText + '\n';
    }
    
    return fullText;
  } catch (error) {
    console.error('PDF parsing error:', error);
    throw new Error('Failed to extract text from PDF. Please ensure the file is a valid PDF document.');
  }
};

export const generatePDF = (content: string): Blob => {
  const doc = new jsPDF();
  
  // Configure styling
  doc.setFont('helvetica');
  doc.setFontSize(12);
  
  // Split content into lines and add to PDF
  const lines = doc.splitTextToSize(content, 180);
  let y = 20;
  
  lines.forEach((line: string) => {
    if (y > 280) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 15, y);
    y += 7;
  });
  
  return doc.output('blob');
};