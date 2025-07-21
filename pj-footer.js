document.addEventListener('DOMContentLoaded', () => {
  // Chat Elements
  const chatPanel = document.getElementById('chatPanel');
  const chatBody = document.getElementById('chatBody');
  const chatInput = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  const successToast = document.getElementById('successToast');

  // Newsletter Elements
  const form = document.getElementById('subscribeForm');
  const successMessage = document.getElementById('successMessage');

  // Chat questions & answers
  const questions = [
    { key: 'name', text: 'What is your name?', validate: v => v.trim().length > 1 },
    { key: 'email', text: 'May I have your email for further communication?', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) },
    { key: 'phone', text: 'To ensure seamless communication, could you share your mobile number?', validate: v => /^[0-9]{7,15}$/.test(v.trim()) },
    { key: 'message', text: 'Please feel free to enter your enquiry here..', validate: v => v.trim().length > 5 }
  ];

  const answers = {};
  let currentQuestionIndex = 0;

  // Chat toggle function (global so accessible from onclick in HTML)
  window.toggleChat = function () {
    if (chatPanel.style.display === 'flex') {
      chatPanel.style.display = 'none';
      resetChat();
    } else {
      chatPanel.style.display = 'flex';
      chatInput.focus();
      startChat();
    }
  };

  // Chat functions
  function startChat() {
    appendBotMessage("Hi! 👋 I’m here to help. What’s your name?");
  }

  function showTyping(callback) {
    const typingBubble = document.createElement('div');
    typingBubble.className = 'bubble bot';
    typingBubble.innerHTML = `
      <img src="https://randomuser.me/api/portraits/women/44.jpg" />
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    `;
    chatBody.appendChild(typingBubble);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
      typingBubble.remove();
      callback();
    }, 1000);
  }

  function appendBotMessage(text) {
    showTyping(() => {
      const div = document.createElement('div');
      div.className = 'bubble bot';
      div.innerHTML = `
        <img src="https://randomuser.me/api/portraits/women/44.jpg" />
        <div class="text">${text}</div>
      `;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;
    });
  }

  function appendUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'bubble user';
    div.innerHTML = `
      <img src="https://img.icons8.com/color/48/user-male-circle--v1.png" />
      <div class="text">${text}</div>
    `;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  chatInput.addEventListener('input', () => {
    const currentQ = questions[currentQuestionIndex];
    sendBtn.disabled = !currentQ.validate(chatInput.value.trim());
  });

  sendBtn.addEventListener('click', () => {
    const answer = chatInput.value.trim();
    const currentQ = questions[currentQuestionIndex];
    if (!currentQ.validate(answer)) return;

    appendUserMessage(answer);
    answers[currentQ.key] = answer;
    chatInput.value = '';
    sendBtn.disabled = true;

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      appendBotMessage(questions[currentQuestionIndex].text);
    } else {
      sendBtn.textContent = 'Send';
      submitForm();
    }
  });

  function submitForm() {
    const formData = new FormData();
    formData.append('access_key', '5b9ec738-33ed-438c-9a7f-de11e2251a36');
    formData.append('name', answers.name);
    formData.append('email', answers.email);
    formData.append('phone', answers.phone);
    formData.append('message', answers.message);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    }).then(() => {
      appendBotMessage("✅ Thank you for reaching out. We will get back to you as soon as possible.");

      const div = document.createElement('div');
      div.className = 'bubble bot';
      div.innerHTML = `
        <img src="https://randomuser.me/api/portraits/women/44.jpg" />
        <div class="text">
          You can also <a href="https://wa.me/919877787605?text=Hi, I just submitted a message on your website and would like to chat further."
            target="_blank"
            style="display:inline-block; margin-top:8px; padding:8px 16px; background:#25D366; color:white; text-decoration:none; border-radius:20px; font-weight:bold;">
            💬 Chat on WhatsApp
          </a>
        </div>
      `;
      chatBody.appendChild(div);
      chatBody.scrollTop = chatBody.scrollHeight;

      showToast();
      setTimeout(() => toggleChat(), 6000);
    }).catch(() => {
      appendBotMessage("Oops! Something went wrong. Please try again.");
    });
  }

  function resetChat() {
    chatBody.innerHTML = '';
    chatInput.value = '';
    sendBtn.disabled = true;
    sendBtn.textContent = 'Next';
    currentQuestionIndex = 0;
    Object.keys(answers).forEach(k => delete answers[k]);
  }

  function showToast() {
    successToast.style.display = 'block';
    setTimeout(() => {
      successToast.style.display = 'none';
    }, 3000);
  }

  // Newsletter subscription form JS
  if (!form) return; // If footer not present on page

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        form.reset();
        successMessage.style.display = 'block';
        setTimeout(() => {
          successMessage.style.display = 'none';
        }, 5000);
      } else {
        alert('Subscription failed. Please try again.');
      }
    }).catch(() => {
      alert('An error occurred. Please try again.');
    });
  });

});
