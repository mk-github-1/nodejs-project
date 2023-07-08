import DOMPurify from 'dompurify';

export function sanitizeHtml(html: string): string {
  // HTMLのサニタイズ
  const cleanHtml = DOMPurify.sanitize(html);
  return cleanHtml;
}
