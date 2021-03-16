import Header from '../components/Header';
import SEO from '../components/SEO';

export default function Home(): JSX.Element {
  return (
    <div>
      <SEO
        title="Reece Rose - Portfolio"
        description="Portfolio website for Reece Rose"
      />
      <Header />
    </div>
  );
}
