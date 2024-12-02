// document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
//     event.preventDefault(); // Prevent the form from submitting
var _a;
//     // Get the values from the form inputs
//     const name = (document.getElementById("name") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const number = (document.getElementById("number") as HTMLInputElement).value;
//     const education = (document.getElementById("education") as HTMLInputElement).value;
//     const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
//     const skills = (document.getElementById("skills") as HTMLInputElement).value;
//     // Build the resume content HTML
//     const resumeContent = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> <span contenteditable ="true"> ${name} </span> </p>
//         <p><strong>Email:</strong>  <span contenteditable ="true"> ${email} </span> </p>
//         <p><strong>Contact:</strong> <span contenteditable ="true"> ${number} </span> </p>
//         <p><strong>Education:</strong>  <span contenteditable ="true"> ${education} </span> </p>
//         <p><strong>Work Experience:</strong> <span contenteditable ="true"> ${workExperience} </span> </p>
//         <p><strong>Skills:</strong> <span contenteditable ="true"> ${skills} </span> </p>
//     `;
//     // Insert the resume content into the output div
//     document.getElementById("resumeOutput")!.innerHTML = resumeContent;
// });
// document.getElementById("resumeForm")?.addEventListener("submit", function (event: Event) {
//     event.preventDefault(); // Prevent the form from submitting
//     // Get the values from the form inputs
//     const name = (document.getElementById("name") as HTMLInputElement).value;
//     const email = (document.getElementById("email") as HTMLInputElement).value;
//     const number = (document.getElementById("number") as HTMLInputElement).value;
//     const education = (document.getElementById("education") as HTMLInputElement).value;
//     const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
//     const skills = (document.getElementById("skills") as HTMLInputElement).value;
//     // Build the resume content HTML
//     const resumeContent = `
//         <h2>Resume</h2>
//         <p><strong>Name:</strong> <span contenteditable="true"> ${name} </span> </p>
//         <p><strong>Email:</strong>  <span contenteditable="true"> ${email} </span> </p>
//         <p><strong>Contact:</strong> <span contenteditable="true"> ${number} </span> </p>
//         <p><strong>Education:</strong>  <span contenteditable="true"> ${education} </span> </p>
//         <p><strong>Work Experience:</strong> <span contenteditable="true"> ${workExperience} </span> </p>
//         <p><strong>Skills:</strong> <span contenteditable="true"> ${skills} </span> </p>
//     `;
//     // Insert the resume content into the output div
//     document.getElementById("resumeOutput")!.innerHTML = resumeContent;
//     // Create the shareable URL with form data as query parameters
//     const url = new URL(window.location.href);
//     url.searchParams.set('name', name);
//     url.searchParams.set('email', email);
//     url.searchParams.set('number', number);
//     url.searchParams.set('education', education);
//     url.searchParams.set('workExperience', workExperience);
//     url.searchParams.set('skills', skills);
//     // Display the shareable link
//     const shareLink = document.getElementById("shareLink") as HTMLAnchorElement;
//     shareLink.href = url.href;  // Set the link's href to the generated URL
//     document.getElementById("shareableLink")!.style.display = 'block';  // Show the link div
//     // Show the download PDF button
//     document.getElementById("downloadBtn")!.style.display = 'block';
// });
// // PDF download functionality
// document.getElementById("downloadBtn")?.addEventListener("click", function () {
//     const { jsPDF } = window.jspdf;
//     const doc = new jsPDF();
//     const resumeContent = document.getElementById("resumeOutput")?.innerHTML || "";
//     // Add the resume content to PDF (basic version without rich formatting)
//     doc.text(resumeContent.replace(/<[^>]*>/g, ""), 10, 10);
//     doc.save('resume.pdf');
// });
document.addEventListener("DOMContentLoaded", function () {
    var _a;
    // Parse the URL query parameters
    var urlParams = new URLSearchParams(window.location.search);
    var name = urlParams.get('name');
    var email = urlParams.get('email');
    var number = urlParams.get('number');
    var education = urlParams.get('education');
    var workExperience = urlParams.get('workExperience');
    var skills = urlParams.get('skills');
    // If there are query parameters, populate the resume output automatically
    if (name && email && number && education && workExperience && skills) {
        // Build the resume content HTML
        var resumeContent = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span contenteditable=\"true\"> ".concat(name, " </span> </p>\n            <p><strong>Email:</strong>  <span contenteditable=\"true\"> ").concat(email, " </span> </p>\n            <p><strong>Contact:</strong> <span contenteditable=\"true\"> ").concat(number, " </span> </p>\n            <p><strong>Education:</strong>  <span contenteditable=\"true\"> ").concat(education, " </span> </p>\n            <p><strong>Work Experience:</strong> <span contenteditable=\"true\"> ").concat(workExperience, " </span> </p>\n            <p><strong>Skills:</strong> <span contenteditable=\"true\"> ").concat(skills, " </span> </p>\n        ");
        // Insert the resume content into the output div
        document.getElementById("resumeOutput").innerHTML = resumeContent;
    }
    // Listen for form submit to generate the resume and create the shareable URL
    (_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        // Get the values from the form inputs
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var number = document.getElementById("number").value;
        var education = document.getElementById("education").value;
        var workExperience = document.getElementById("workExperience").value;
        var skills = document.getElementById("skills").value;
        // Build the resume content HTML
        var resumeContent = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> <span contenteditable=\"true\"> ".concat(name, " </span> </p>\n            <p><strong>Email:</strong>  <span contenteditable=\"true\"> ").concat(email, " </span> </p>\n            <p><strong>Contact:</strong> <span contenteditable=\"true\"> ").concat(number, " </span> </p>\n            <p><strong>Education:</strong>  <span contenteditable=\"true\"> ").concat(education, " </span> </p>\n            <p><strong>Work Experience:</strong> <span contenteditable=\"true\"> ").concat(workExperience, " </span> </p>\n            <p><strong>Skills:</strong> <span contenteditable=\"true\"> ").concat(skills, " </span> </p>\n        ");
        // Insert the resume content into the output div
        document.getElementById("resumeOutput").innerHTML = resumeContent;
        // Create the shareable URL with form data as query parameters
        var url = new URL(window.location.href);
        url.searchParams.set('name', name);
        url.searchParams.set('email', email);
        url.searchParams.set('number', number);
        url.searchParams.set('education', education);
        url.searchParams.set('workExperience', workExperience);
        url.searchParams.set('skills', skills);
        // Display the shareable link
        var shareLink = document.getElementById("shareLink");
        shareLink.href = url.href; // Set the link's href to the generated URL
        document.getElementById("shareableLink").style.display = 'block'; // Show the link div
        // Show the download PDF button
        document.getElementById("downloadBtn").style.display = 'block';
    });
});
// PDF download functionality
(_a = document.getElementById("downloadBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    var jsPDF = window.jspdf.jsPDF;
    var doc = new jsPDF();
    var resumeContent = ((_a = document.getElementById("resumeOutput")) === null || _a === void 0 ? void 0 : _a.innerHTML) || "";
    // Add the resume content to PDF (basic version without rich formatting)
    doc.text(resumeContent.replace(/<[^>]*>/g, ""), 10, 10);
    doc.save('resume.pdf');
});
