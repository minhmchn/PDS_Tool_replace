let output = "";

// Function to go back to index.html
function goHome() {
    window.location.href = "../index.html";
}

// Function to generate dynamic input fields based on user input
function generateInputFields() {
    const numberOfStrings = document.getElementById('number_of_strings').value;
    const dynamicFieldsContainer = document.getElementById('dynamicFields');

    // Clear previous fields
    dynamicFieldsContainer.innerHTML = '';

    for (let i = 1; i <= numberOfStrings; i++) {
        const newField = document.createElement('div');
        newField.classList.add('form-group');
        newField.innerHTML = `
            <label for="replace_string_${i}">Đoạn text cần thay đổi ${i}:</label>
            <textarea name="replace_string_${i}" id="replace_string_${i}" class="form-control" placeholder="Enter string to replace"></textarea>
        `;
        dynamicFieldsContainer.appendChild(newField);
    }
}

function getText() {
    const inputData = $("#input").val(); // Lấy dữ liệu đầu vào
    const const_value = $("#const-value").val(); // Giá trị cố định ban đầu
    const start_number = parseInt($("#start_number").val()); // Số bắt đầu
    const end_number = parseInt($("#end_number").val()); // Số kết thúc

    // Kiểm tra điều kiện đầu vào
    if (isNaN(start_number) || isNaN(end_number) || start_number > end_number) {
        alert("Hãy nhập số kết thúc lớn hơn số nhập bắt đầu.");
        return;
    }

    output = const_value + "\n"; // Khởi tạo đầu ra với giá trị cố định

    // Lấy tất cả các đoạn text cần thay đổi
    const numberOfStrings = document.getElementById('number_of_strings').value;

    for (let j = start_number; j <= end_number; j++) {
        let rep_1 = inputData; // Khởi tạo rep_1 với inputData để thay thế các đoạn văn bản

        for (let i = 1; i <= numberOfStrings; i++) {
            const replaceString = document.getElementById(`replace_string_${i}`).value; // Lấy đoạn text cần thay đổi
            
            if (replaceString) { // Kiểm tra xem có nhập đoạn text hay không
                let regex = new RegExp(replaceString + "\\d*", "g"); // Tìm chuỗi và số cần thay đổi
                rep_1 = rep_1.replace(regex, replaceString + j); // Thay thế số sau chuỗi
            }
        }
        
        output += rep_1 + "\n"; // Thêm kết quả vào output
    }

    // Hiển thị kết quả trong khung thông báo
    $("#generatedText").val(output); // Sửa lại để sử dụng ID chính xác
    $("#notification").show(); // Hiển thị khung thông báo
}

// Function to close the notification
function closeNotification() {
    $("#notification").hide(); // Ẩn khung thông báo
}

// Function to copy the text from the notification
function copyText() {
    const textArea = document.createElement("textarea");
    textArea.value = output; // Đặt nội dung để sao chép
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea); // Xóa textarea sau khi sao chép

    // Hiển thị thông báo sao chép
    $("#copyNotification").show(); // Hiện thông báo
    setTimeout(function() {
        $("#copyNotification").fadeOut(); // Tự động ẩn sau 2 giây
    }, 2000); // Thời gian ẩn (2000ms = 2 giây)
}
