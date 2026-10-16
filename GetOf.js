async function checkConnection(url) {
    if (!navigator.onLine) {
        console.log("ОШИБКА: У вас пропал интернет!");
        return;
    }

    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log("Данные получены:", data);
    } catch (error) {
        console.log("Сервер недоступен или нет сети:", error.message);
    }
}

checkConnection('https://jsonplaceholder.typicode.com/users');