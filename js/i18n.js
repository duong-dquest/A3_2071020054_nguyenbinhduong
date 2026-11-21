(function () {
  var stored = '';
  try { stored = localStorage.getItem('lang') || ''; } catch (e) {}
  var lang = stored || ((navigator.language || 'vi').slice(0, 2) === 'vi' ? 'vi' : 'en');
  window.LANG = lang;
  if (lang !== 'en') return;
  document.documentElement.lang = 'en';
  var A = '<span aria-hidden="true">';
  var ROWS = [
    ['.skip-link', ['Skip navigation']],
    ['.nav a', ['Home', 'About', 'Projects', 'Contact']],
    ['.brand', ['<span class="brand-mark" aria-hidden="true"></span>PERSONAL SITE']],
    ['.hero .eyebrow', ['<span class="status-dot" aria-hidden="true"></span>Hello, welcome to my world']],
    ['#page-title', ['I’m<br><span>Nguyễn Bình Dương.</span>']],
    ['.hero .intro', ['First-year IT student at Dai Nam University who loves game development and experiences that connect people. I’m turning ideas like <strong>AVATAR PARADE</strong> and <strong>NITRO DASH</strong> into fun interactive concepts.']],
    ['.hero-actions a', ['See my projects ' + A + '↓</span>', 'Get in touch ' + A + '↗</span>']],
    ['#about .section-heading .eyebrow', ['THINGS I LOVE', 'EDUCATION, SKILLS AND GOALS', 'MY JOURNEY', 'LEARNING NOW']],
    ['#about .section-heading h2', ['Featured <span>interests</span>', 'What am I <span>building?</span>', 'From the first <span>line of code</span>', 'What am I <span>learning?</span>']],
    ['#about .section-heading > p', ['Each interest is a piece of the ideas I want to build.', 'A first-year student with basic web programming skills who keeps learning every day, aiming to become a software or game developer who builds creative, useful products with real-world value.', 'A few milestones on my way to programming and games.', 'Updated 11/2026: two things I’m teaching myself right now.']],
    ['#about .interest-card h3', ['Game development', 'Roblox Studio', 'TikTok LIVE', 'Technology', 'Online entrepreneurship', 'Listening to music', 'Education', 'Current skills', 'Goals', 'English', 'Working with AI']],
    ['#about .interest-card > p', ['Coming up with ideas, building rules and designing gameplay so every match has something memorable.', 'Exploring how to build game worlds, characters and interactions that make players want to come back.', 'Turning comments and audience participation into a fun part of the live experience.', 'Learning programming, computers and networking, the foundation for turning ideas into products.', 'Excited about building useful digital products, finding the right users and creating lasting value.', 'Music is my inspiration for relaxing, focusing and sparking new ideas.', 'Learning through the Duolingo app and YouTube videos.', 'Learning how to work with AI to make better use of it, following tips found on social media.']],
    ['#about .interest-card li', ['Dai Nam University', 'Major: Information Technology', 'First-year student', 'Interests: technology, programming, games and interactive experiences', 'Basic web programming', 'Basic knowledge of computers and networking', 'Hands-on practice with VPN connections and network checks using Ping', 'Coming up with ideas and building game mechanics', 'Self-learning and exploring technology through tutorials', 'Improve programming and software development skills', 'Learn more game development technologies', 'Build and finish a game of my own', 'Build a product with real users', 'Earn income from technology products I create']],
    ['.tl-when', ['Middle school', 'Grade 9', '09/2026', 'First year', 'In parallel', '11/2026']],
    ['.tl-item h3', ['The first lines of code', 'Discovering Roblox', 'Starting university', 'NITRO DASH is born', 'More game ideas', 'This site']],
    ['.tl-item p', ['Got introduced to Computer Science in middle school and wrote my first lines of code, which sparked my passion for programming.', 'Became interested in Roblox when I set up a virtual machine to keep a game running.', 'Started the Information Technology major at Dai Nam University and began learning web programming and computer networking in my first year.', 'Came up with NITRO DASH during a break in the web design course, intending to experiment with AI.', 'AVATAR PARADE comes from wanting to earn some extra income through TikTok livestreams; the 2D shooter is still just an idea.', 'Built this introduction page, then kept adding effects, the spirit and mini games just for fun.']],
    ['.projects .section-heading .eyebrow', ['MY IDEAS']],
    ['.projects .section-heading h2', ['Featured <span>projects</span>']],
    ['.project-platform', ['ROBLOX × TIKTOK LIVE', 'ENDLESS RACER', '2D ACTION']],
    ['.project-tagline', ['Your stage, the whole community’s party.', 'Dodge smart, run far, show off your new ride in the garage.', 'A game idea waiting to be sketched.']],
    ['#project-brief', ['A game idea where players show off their avatars while the audience comments and votes live.']],
    ['#project-brief-2', ['An endless racing game: dodge cars and pedestrians, collect coins and upgrade your car and garage. Crash, and the police chase you right away.']],
    ['article:last-of-type .project-copy > p:not(.project-tagline)', ['An idea for a 2D action game. Mechanics and content are still at the idea stage.']],
    ['.project-details summary', ['Explore the idea', 'See the game mechanics']],
    ['.project-details > p', ['Players pick a style, walk the runway by theme and get cheered on by the community. Each round ends with a fun leaderboard.']],
    ['.project-details h4', ['Rules', 'Items on the road', 'Skins and parts', 'Upgrades and garage']],
    ['.project-details li', ['The car speeds up the longer you drive; you only focus on dodging obstacles and pedestrians.', 'Hit a person or another car and you lose health; a police car appears and chases you for 15 seconds.', 'Obstacle vehicles include sedans, supercars, ambulances, fire trucks and big trucks.', 'Coins are scattered on the road; each one gives 10 coins.', 'A heart restores health after a crash, with a 10% spawn rate.', 'A shield blocks one hit without losing health, with a 5% spawn rate.', 'Colored regular cars (red, green, yellow, blue, pink, black…) cost 100 coins each.', 'Tesla 1,000 coins, Ford 5,000, Ferrari 20,000, Lamborghini 50,000, flying tech supercar 1,000,000.', 'Each skin is bought part by part: engine, body, wheels, nitro. Collect them all to assemble the car.', 'Spend coins to upgrade maneuvering speed, agility, durability and aura.', 'You can take another car’s engine and fit it into yours to change its stats.', 'Garage level 1 holds 1 car, level 2 holds 2…; each upgrade makes the garage prettier.']],
    ['.project-copy-btn', ['Copy summary ' + A + '↗</span>', 'Try it ▶', 'Copy summary ' + A + '↗</span>']],
    ['.game-help', ['Use ← → or A D to change lanes; on a phone tap the left or right half of the game. This demo only has color skins; Tesla, Ford, Ferrari… are part of the full concept.']],
    ['.project-footnote', ['All three are personal ideas: AVATAR PARADE isn’t connected to Roblox or TikTok LIVE, NITRO DASH has a trimmed-down demo in the browser, and the 2D shooter is still just an idea.']],
    ['.contact h2', ['Let’s connect']],
    ['.contact p:not(.copy-status)', ['Follow my projects or say hi on GitHub!']],
    ['.contact .copy-btn', ['Copy GitHub link']],
    ['.contact-actions .contact-link', ['Open GitHub ' + A + '↗</span>']]
  ];
  var ATTR = [
    ['.back-to-top', 'aria-label', ['Back to top']],
    ['.sprite-fairy', 'aria-label', ['Spirit: tap, drag or throw it to play']],
    ['.sprite-fairy', 'title', ['Drag me!']],
    ['.dock', 'aria-label', ['Fun tools']],
    ['.dock [data-dock]', 'aria-label', ['Badges', 'Take me on a tour', 'Ask the spirit', 'Day or night', 'More tools', 'Weather', 'Background music', 'Sound effects', 'Change language', 'Don’t press']],
    ['.dock [data-dock]', 'title', ['Badges', 'Take me on a tour', 'Ask the spirit', 'Day / night', 'More', 'Weather: rain, snow, cherry blossoms', 'Background music (off by default)', 'Sound effects (off by default)', 'Tiếng Việt / English', 'Don’t press!']]
  ];
  ROWS.forEach(function (r) {
    var els = document.querySelectorAll(r[0]);
    if (els.length !== r[1].length) { if (window.console) console.warn('i18n: lệch số phần tử', r[0], els.length, r[1].length); return; }
    els.forEach(function (e, i) { e.innerHTML = r[1][i]; });
  });
  ATTR.forEach(function (r) {
    var els = document.querySelectorAll(r[0]);
    if (els.length !== r[2].length) { if (window.console) console.warn('i18n: lệch số phần tử', r[0], r[1], els.length, r[2].length); return; }
    els.forEach(function (e, i) { e.setAttribute(r[1], r[2][i]); });
  });
  document.title = 'Nguyễn Bình Dương — Personal site';
  var md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', 'First-year IT student exploring game development, with the AVATAR PARADE and NITRO DASH ideas — by Nguyễn Bình Dương.');
})();
