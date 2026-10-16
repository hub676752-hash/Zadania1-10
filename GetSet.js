async function set(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            let response = await fetch(url);
            if (!response.ok) throw new Error("Ошибка сети");
            
            let data = await response.json();
            console.log("УСПЕХ! Данные получены (первые 2 элемента):", data.slice(0, 2));
            
            return data;
        } catch (error) {
            console.log(`Попытка ${i + 1} не удалась. Пробуем снова...`);
            if (i === retries - 1) throw error;
        }
    }
}

set("https://jsonplaceholder.typicode.com/photos");