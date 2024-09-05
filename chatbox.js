document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.getElementById('chat-box');
    const openChatButton = document.getElementById('open-chat');
    const closeChatButton = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
  
    // Function to open the chatbox
    function openChatBox() {
      chatBox.style.display = 'flex'; // Show the chatbox
      chatBox.classList.add('show'); // Add class to show with animation
      chatInput.focus(); // Focus on the input field
    }
  
    // Function to close the chatbox
    function closeChatBox() {
      chatBox.classList.remove('show'); // Remove class to hide with animation
      setTimeout(() => chatBox.style.display = 'none', 300); // Hide after animation
    }
  
    // Event listener to open the chatbox when the button is clicked
    openChatButton.addEventListener('click', openChatBox);
  
    // Event listener to close the chatbox when the close button is clicked
    closeChatButton.addEventListener('click', closeChatBox);
  
    // Optional: Close chatbox when clicking outside
    document.addEventListener('click', (event) => {
      if (!chatBox.contains(event.target) && !openChatButton.contains(event.target)) {
        closeChatBox();
      }
    });
  });  