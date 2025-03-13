let hasChosen = false; // Biến flag để kiểm tra xem người dùng đã chọn hay chưa

function showAnswer(type) {
  if (hasChosen) {
    alert("Bạn đã chọn một loại bàn làm việc rồi!");
    return; // Nếu đã chọn, không thực hiện gì thêm
  }

  const answerDiv = document.getElementById("answer");
  let answerText = "";

  switch (type) {
    case "lộn xộn":
      answerText =
        "Bạn là người sáng tạo và có thể làm việc trong môi trường hỗn loạn.";
      break;
    case "tối giản":
      answerText =
        "Bạn thích sự đơn giản và ngăn nắp, luôn tập trung vào những điều quan trọng.";
      break;
    case "mở rộng":
      answerText =
        "Bạn là người có tầm nhìn rộng và thích khám phá những cơ hội mới.";
      break;
    case "trang trí":
      answerText =
        "Bạn là người có gu thẩm mỹ và thích thể hiện cá tính qua không gian làm việc.";
      break;
    default:
      answerText = "Hãy chọn một loại bàn làm việc để xem đáp án.";
  }

  answerDiv.textContent = answerText;
  hasChosen = true; // Đánh dấu là người dùng đã chọn

  // Vô hiệu hóa các thẻ <p> khác
  const allParagraphs = document.querySelectorAll(".desk-type p");
  allParagraphs.forEach((p) => {
    if (p.onclick) {
      p.style.pointerEvents = "none"; // Vô hiệu hóa sự kiện click
      p.style.opacity = "0.5"; // Làm mờ để thể hiện rằng nó không thể chọn
    }
  });
}
