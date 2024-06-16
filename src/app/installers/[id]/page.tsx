// pages/installers/[id].jsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import EditInstallerForm from '../../../components/EditInstallerForm';

const EditInstallerPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [installer, setInstaller] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch the installer from the new API route
      fetch(`/api/installers/${id}/get`)
        .then((response) => response.json())
        .then((data) => setInstaller(data.data))
        .catch((error) => console.error('Error fetching installer:', error));
    }
  }, [id]);

  const handleUpdateInstaller = (updatedInstaller) => {
    fetch(`/api/installers/${id}/put`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedInstaller),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Installer updated:', data);
        router.push('/installers'); // Redirect to installers list page
      })
      .catch((error) => console.error('Error updating installer:', error));
  };

  return (
    <div>
      <h1>Edit Installer</h1>
      {installer ? (
        <EditInstallerForm installer={installer} onSubmit={handleUpdateInstaller} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditInstallerPage;
