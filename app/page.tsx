import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to admin page as the landing page
  redirect('/admin');
}
