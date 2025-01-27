const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose">
        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect,
          use, and protect your personal information when you use our application.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <p className="mb-4">
          We collect audio recordings and associated metadata only when you explicitly
          choose to record. Your data is stored securely and is not shared with third parties.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
        <p className="mb-4">
          The recordings are used solely for the purpose of documenting and reporting
          incidents. All data is encrypted and stored securely.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-3">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, modify, or delete your recordings at any time.
          Contact us if you need assistance with managing your data.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;