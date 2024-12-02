document.addEventListener("DOMContentLoaded", function () {
    // Parse the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');
    const number = urlParams.get('number');
    const education = urlParams.get('education');
    const workExperience = urlParams.get('workExperience');
    const skills = urlParams.get('skills');

    // If there are query parameters, populate the resume output automatically
    if (name && email && number && education && workExperience && skills) {
        // Build the resume content HTML
        const resumeContent = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span contenteditable="true"> ${name} </span> </p>
            <p><strong>Email:</strong>  <span contenteditable="true"> ${email} </span> </p>
            <p><strong>Contact:</strong> <span contenteditable="true"> ${number} </span> </p>
            <p><strong>Education:</strong>  <span contenteditable="true"> ${education} </span> </p>
            <p><strong>Work Experience:</strong> <span contenteditable="true"> ${workExperience} </span> </p>
            <p><strong>Skills:</strong> <span contenteditable="true"> ${skills} </span> </p>
        `;

        // Insert the resume content into the output div
        document.getElementById("resumeOutput")!.innerHTML = resumeContent;
    }

    // Listen for form submit to generate the resume and create the shareable URL
    document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the values from the form inputs
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const number = (document.getElementById("number") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLInputElement).value;
        const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        // Build the resume content HTML
        const resumeContent = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> <span contenteditable="true"> ${name} </span> </p>
            <p><strong>Email:</strong>  <span contenteditable="true"> ${email} </span> </p>
            <p><strong>Contact:</strong> <span contenteditable="true"> ${number} </span> </p>
            <p><strong>Education:</strong>  <span contenteditable="true"> ${education} </span> </p>
            <p><strong>Work Experience:</strong> <span contenteditable="true"> ${workExperience} </span> </p>
            <p><strong>Skills:</strong> <span contenteditable="true"> ${skills} </span> </p>
        `;

        // Insert the resume content into the output div
        document.getElementById("resumeOutput")!.innerHTML = resumeContent;

        // Create the shareable URL with form data as query parameters
        const url = new URL(window.location.href);
        url.searchParams.set('name', name);
        url.searchParams.set('email', email);
        url.searchParams.set('number', number);
        url.searchParams.set('education', education);
        url.searchParams.set('workExperience', workExperience);
        url.searchParams.set('skills', skills);

        // Display the shareable link
        const shareLink = document.getElementById("shareLink") as HTMLAnchorElement;
        shareLink.href = url.href;  // Set the link's href to the generated URL
        document.getElementById("shareableLink")!.style.display = 'block';  // Show the link div

        // Show the download PDF button
        document.getElementById("downloadBtn")!.style.display = 'block';
    });
});

// PDF download functionality
document.getElementById("downloadBtn")?.addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const resumeContent = document.getElementById("resumeOutput")?.innerHTML || "";

    // Add the resume content to PDF (basic version without rich formatting)
    doc.text(resumeContent.replace(/<[^>]*>/g, ""), 10, 10);
    doc.save('resume.pdf');
});
