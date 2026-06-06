

Class 01 – The 2026 Web Ecosystem

THEORY

1.QUESTION:  Draw how a browser takes HTML and turns it into what you see on screen. Explain why understanding this matters.
ANSWER:  When a browser receives an HTML file, it doesn't immediately display the page. First, it reads the HTML and creates a DOM Tree (Document Object Model), which is a structured representation of all elements on the page. The browser also processes CSS files and creates a CSS structure. These are combined to form the Render Tree, which contains only the elements that need to be displayed.

Next comes the Layout stage, where the browser calculates the size and position of every visible element. After that, the browser performs Paint, which means drawing text, colors, borders, images, and other visual components onto the screen. Modern browsers may also use compositing to improve performance.

Understanding this process is important because it helps developers build faster and more efficient websites. For example, unnecessary DOM updates can trigger expensive layout recalculations and repainting. Knowing how rendering works helps me write cleaner code, improve page speed, reduce lag, and create a better user experience. It also makes debugging easier because I can identify whether an issue comes from HTML structure, CSS styling, or JavaScript updates.




2.QUESTION:  HTTP/3 uses QUIC instead of TCP. Explain what problem QUIC solves and why it matters.

ANSWER: Before HTTP/3, websites mainly used TCP for communication. One major issue with TCP is that if a packet gets lost, other packets often have to wait until the missing one arrives. This can slow down websites, especially on unstable mobile networks.

QUIC solves this problem by using UDP as its foundation while adding reliability and security features. It allows multiple streams of data to travel independently, meaning one delayed packet does not block everything else. QUIC also combines connection setup and encryption into fewer steps, reducing the time needed to establish secure connections.

This matters in 2026 because more people access websites through mobile devices, public Wi-Fi, and varying network conditions. Users expect pages, videos, and applications to load instantly. HTTP/3 improves speed, reduces latency, and provides a smoother experience. For businesses, this can lead to better user satisfaction, longer engagement, and higher conversion rates. In simple terms, QUIC helps the internet feel faster and more reliable even when network conditions are poor.



3.QUESTION: Identify one website that does not properly use semantic HTML. What clues tell you this?

ANSWER: One example I have personally encountered is some older government or educational websites that rely heavily on nested <div> elements for everything. While the site may function correctly, there are signs that semantic HTML is not being used properly.

One clue is poor keyboard navigation. Sometimes pressing the Tab key moves focus in a confusing order. Another clue is missing page landmarks such as <main>, <nav>, or <header>, which makes navigation difficult for screen reader users. Headings may also appear visually large but are not actually coded as heading elements.

Accessibility tools often reveal these problems. Screen readers may struggle to identify the page structure, making it harder for visually impaired users to understand the content. Search engines may also have a harder time understanding which content is most important. These issues suggest that the website relies more on visual design than semantic structure.



PRODUCT THINKING

1. QUESTION: How does semantic HTML help a famous chef's blog get more traffic?

ANSWER: Semantic HTML helps search engines understand the structure and meaning of content. If I were building a blog for a famous chef, I would use semantic elements carefully.

The <header> would contain the blog title and navigation menu. The <main> element would contain the primary content of each page. Every recipe post would be wrapped inside an <article> because each recipe is a complete piece of content that can stand on its own. The <aside> section could contain related recipes, advertisements, or cooking tips.

This structure helps search engines understand what content is most important. Search engines can more easily identify recipe titles, ingredients, instructions, and supporting content. Semantic HTML also improves accessibility, making the site easier to use for all visitors.

Better accessibility, clearer structure, and improved search engine understanding can contribute to higher rankings and increased organic traffic. This means more visitors discovering the chef's recipes through search results.


2.QUESTION:  Edge computing in a real-time multiplayer game.

ANSWER: The biggest benefit of edge computing for a real-time multiplayer game is reduced latency. Players expect actions such as movement, shooting, or interactions to happen almost instantly. If data must travel to a distant central server and back, delays can occur.

By processing data closer to players, edge servers reduce the distance information must travel. This means faster response times and smoother gameplay. Players experience fewer delays and more accurate synchronization with other players.

Edge computing can also help balance server loads and reduce network congestion. For competitive games, low latency is critical because even small delays can affect fairness and player satisfaction. Therefore, reducing latency would be my top priority when designing a multiplayer gaming system.



ENGINEERING BEST PRACTICE

1.QUESTION: "Just use divs everywhere, it works fine." Do you agree?

ANSWER: I disagree with the idea of using divs everywhere. While a website can technically function using only div elements, it can also create problems for accessibility, maintainability, and teamwork.

Semantic HTML provides meaning to content. Elements such as <header>, <nav>, <main>, <article>, and <footer> help screen readers understand page structure and improve navigation for users with disabilities. Search engines also rely on semantic structure to better understand and index content.

From a maintenance perspective, semantic elements make code easier to read. When another developer opens the project, they can quickly understand the purpose of different sections without examining large numbers of generic divs. This improves collaboration and reduces confusion.

Using semantic HTML also encourages better coding practices and future scalability. While divs still have an important role for layout and styling, they should not replace meaningful HTML elements when those elements already exist. Semantic HTML creates cleaner, more accessible, and more professional web applications.



