import { CV } from '@/component-pages/CV';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV - Nguyen Thien Nhan - Front-End Developer',
  description: 'This is a resume document',
  icons: '/favicon.svg',
};
export default function CVPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.header,.footer {display: none}` }} />
      <CV />
    </>
  );
}
