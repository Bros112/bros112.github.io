// Define your header and footer content here
const headerContent = `
<header>
<p>
  <h2>Bros112's Website</h2>
</p>
</header>
`;

const footerContent = `
<footer>
<br><br><br>
<p>
  <a href="/">Home</a><a href="/help">Help</a><br>
  Updated <strong>29th Aug 2023</strong> <br>
  &copy; 2023<script>new Date().getFullYear()>2023&&document.write("-"+new Date().getFullYear());</script> Bros112
</p>
</footer>
`;

// Function to add header and footer
function addHeaderFooter() {
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    // Insert header and footer content into the placeholders
    if (headerPlaceholder){
    headerPlaceholder.innerHTML = headerContent}
    if (footerPlaceholder){
    footerPlaceholder.innerHTML = footerContent}
}

// Call the function to add header and footer when the page is loaded
window.addEventListener("load", addHeaderFooter);