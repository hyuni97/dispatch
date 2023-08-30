document.addEventListener("DOMContentLoaded", function () {
    const updateButton = document.getElementById("update-button");
    const startDateInput = document.getElementById("start-date");
    const endDateInput = document.getElementById("end-date");

    // 시작 날짜를 당월 1일로 설정
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const formattedFirstDay = firstDayOfMonth.toISOString().split("T")[0];
    startDateInput.value = formattedFirstDay;

    // 종료 날짜를 오늘로 설정
    const formattedToday = today.toISOString().split("T")[0];
    endDateInput.value = formattedToday;

    updateButton.addEventListener("click", function () {
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        console.log("시작 날짜:", startDate);
        console.log("종료 날짜:", endDate);
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const updateButton = document.getElementById("update-button");
//     const startDateInput = document.getElementById("start-date");
//     const endDateInput = document.getElementById("end-date");

//     // 시작 날짜를 당월 1일로 설정
//     const today = new Date();
//     const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
//     const formattedFirstDay = formatDate(firstDayOfMonth);
//     startDateInput.value = formattedFirstDay;

//     // 종료 날짜를 오늘로 설정
//     const formattedToday = formatDate(today);
//     endDateInput.value = formattedToday;

//     updateButton.addEventListener("click", function () {
//         const startDate = startDateInput.value;
//         const endDate = endDateInput.value;
//         // 이후에 필요한 로직을 수행
//         console.log("Start Date:", startDate);
//         console.log("End Date:", endDate);
//     });
// });

// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
// }
