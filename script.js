/* Mã JavaScript dưới đây định nghĩa một ứng dụng nhỏ để thêm và xóa công việc từ danh sách sử dụng
  HTML, CSS, và localStorage trong JavaScript. Dưới đây là giải thích từng phần của mã: */

//Khai báo Biến:  
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
//inputBox: Là biến chứa tham chiếu đến phần tử có id là "input-box". Dùng để lấy giá trị từ ô nhập liệu.
/*listContainer: Là biến chứa tham chiếu đến phần tử có id là "list-container".
 Dùng để thêm và hiển thị các mục công việc.*/

//Hàm addTask():
function addTask(){
    // Kiểm tra nếu ô nhập liệu trống
    if(inputBox.value === ''){
        alert("Bạn phải viết một cái gì đó!");
    }
    else{
        // Tạo một mục danh sách mới
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Tạo một nút xóa (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    // Xóa nội dung của ô nhập liệu và lưu dữ liệu
    inputBox.value = "";
    saveData();
}
/* · Kiểm tra xem ô nhập liệu có giá trị không. Nếu rỗng, hiển thị thông báo cảnh báo.
· Nếu có giá trị, tạo một mục danh sách mới (li) chứa giá trị từ ô nhập liệu và thêm vào danh sách.
· Tạo một nút xóa (span) cho mỗi mục danh sách và thêm vào mục danh sách đó.
· Xóa nội dung của ô nhập liệu và gọi hàm saveData() để lưu dữ liệu vào localStorage. */


//Bộ lắng nghe Sự kiện cho listContainer:
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
/* · Sử dụng bộ lắng nghe sự kiện để theo dõi các sự kiện click trên listContainer.
· Kiểm tra xem phần tử được click có phải là một mục danh sách (LI) hay không.
 Nếu đúng, thêm hoặc loại bỏ lớp "checked" để đổi màu nền.
· Nếu phần tử được click là một nút xóa (SPAN), xóa mục danh sách chứa nút đó. */


//Hàm saveData():
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
/* Lưu nội dung của listContainer vào localStorage với key là "data".
 Cụ thể, lưu HTML bên trong listContainer. */

//Hàm showTask():
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
/* · Hiển thị nội dung đã lưu từ localStorage vào listContainer khi trang được tải lên.
· Hàm này được gọi ngay sau khi khai báo để hiển thị mục công việc đã lưu từ lần trước. */