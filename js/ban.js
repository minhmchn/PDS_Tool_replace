let hasChosen = false; // Kiểm tra xem người dùng đã chọn chưa

function showAnswer(type) {
  if (hasChosen) {
    alert("Bạn đã chọn một loại bàn làm việc rồi!");
    return;
  }

  const answers = {
    "lộn xộn": "Bạn là người sáng tạo và có thể làm việc trong môi trường hỗn loạn.(귀하께서는 창의적이시며 혼란스러운 환경에서도 업무를 수행하실 수 있습니다.) ",
    "tối giản": "Bạn thích sự đơn giản và ngăn nắp, luôn tập trung vào những điều quan trọng.(당신은 단순하고 효율적인 것을 좋아하며, 항상 중요한 일에만 집중합니다.)",
    "mở rộng": "Bạn là người có tầm nhìn rộng và thích khám phá những cơ hội mới.(당신은 시야가 넓고 새로운 기회를 탐색하는 것을 좋아합니다.) ",
    "trang trí": "Bạn là người có gu thẩm mỹ và thích thể hiện cá tính qua không gian làm việc.(귀하께서는 미적 감각이 뛰어나시며, 작업 공간을 통해 귀하만의 개성을 표현하시는 것을 즐기십니다.) "
  };

  const answerText = answers[type] || "Hãy chọn một loại bàn làm việc để xem đáp án.";

  // Hiển thị popup
  const popup = document.createElement("div");
  popup.classList.add("popup");
  popup.innerHTML = `
    <div class="popup-content">
      <span class="close-btn" onclick="closePopup()">×</span>
      <p>${answerText}</p>
    </div>
  `;
  document.body.appendChild(popup);

  hasChosen = true;

  // Gọi hiệu ứng hoa rơi sau khi chọn đáp án
  createFallingFlowers();
}

// Đóng popup
function closePopup() {
  const popup = document.querySelector(".popup");
  if (popup) popup.remove();
}

// Tạo hiệu ứng hoa rơi
function createFallingFlowers() {
  const container = document.createElement("div");
  container.classList.add("flower-container");
  document.body.appendChild(container);

  for (let i = 0; i < 15; i++) {
    let flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";
    flower.style.animationDelay = Math.random() * 3 + "s";
    container.appendChild(flower);
  }

  setTimeout(() => {
    container.remove();
  }, 100000);
}

// Thêm CSS cho hiệu ứng hoa rơi
const style = document.createElement("style");
style.innerHTML = `
  .flower {
    position: fixed;
    top: -50px;
    width: 20px;
    height: 20px;
    background-image: url('http://1.bp.blogspot.com/-aZQXzUqSw5E/VKdQ-NZEaxI/AAAAAAAAB9U/3Cj3b3PLygk/s1600/hoa-mai.png');
    background-size: contain;
    opacity: 0.8;
    animation: fall linear infinite;
  }

  @keyframes fall {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
