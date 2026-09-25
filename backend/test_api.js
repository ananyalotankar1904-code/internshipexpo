async function testSubmit() {
  try {
    // 1. Get positions
    const companiesRes = await fetch('http://localhost:3000/api/companies');
    const companiesData = await companiesRes.json();
    const positionId = companiesData.companies[0].positions[0].id;

    // Start application first since student is checked
    await fetch('http://localhost:3000/api/applications/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: "john.doe3@frcrce.ac.in",
        fullName: "John Doe",
        branch: "MECH",
        year: 3
      })
    });

    const payload = {
      email: "john.doe3@frcrce.ac.in",
      applications: [
        {
          positionId: positionId,
          taskLink: "https://github.com/johndoe/task"
        }
      ]
    };

    console.log("Submitting application...");
    const submitRes = await fetch('http://localhost:3000/api/applications/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (!submitRes.ok) {
      console.error("Error Response Status:", submitRes.status);
      console.error("Error Response Data:", await submitRes.text());
    } else {
      console.log("Success:", await submitRes.json());
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

testSubmit();
