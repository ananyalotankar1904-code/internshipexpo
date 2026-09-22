async function testAdmin() {
  try {
    console.log("Logging in as admin...");
    const loginRes = await fetch('http://localhost:3000/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: 'admin', password: 'password123' })
    });
    
    if (!loginRes.ok) {
      throw new Error(`Admin login failed: ${await loginRes.text()}`);
    }
    const loginData = await loginRes.json();
    console.log("Admin login success, token:", loginData.token);
    
    console.log("Fetching applicants...");
    const applicantsRes = await fetch('http://localhost:3000/api/admin/applicants', {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${loginData.token}`
      }
    });
    
    if (!applicantsRes.ok) {
      throw new Error(`Fetch applicants failed: ${await applicantsRes.text()}`);
    }
    const applicantsData = await applicantsRes.json();
    console.log("Fetched applicants successfully.");
    console.log(`Number of applicants: ${applicantsData.applicants?.length}`);
    if (applicantsData.applicants?.length > 0) {
      console.log("Sample applicant:", JSON.stringify(applicantsData.applicants[0], null, 2));
    }
  } catch (err) {
    console.error("Test failed:", err.message);
  }
}

testAdmin();
