import SEO from '../components/SEO';

export default function Home(): JSX.Element {
  return (
    <div
      className="w-full h-full min-h-screen bg-fixed bg-white bg-cover"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      <SEO
        title="Reece Rose - Portfolio"
        description="Portfolio website for Reece Rose"
      />
    </div>
  );
}
