# Задания «SQL»

Для решения задач вам потребуется перейти по ссылке https://sql-academy.org/ru/sandbox. 
Там вы будете выполнять все запросы для теста. По ссылке будет доступна схема `Air travels`, в которой есть
4 таблицы: `TRIP`, `PASS_IN_TRIP`, `PASSENGER`, `COMPANY`. Ответы (SQL запросы) будет необходимо сохранить в этом файле `README`
после каждого задания.

### Задание 1.

C помощью SELECT выведите всех пассажиров, которые летят на самолете `Boeing` от компании `air_France`.
Обязательные поля для вывода: ID пассажира, Имя пассажира как `PASSENGER_NAME`, Название самолета и название компании
как `COMPANY_NAME`.

https://sql-academy.org/sandbox?data=c3FsPVNFTEVDVCtwLmlkJTJDK3AubmFtZSthcytQQVNTRU5HRVJfTkFNRSUyQyUwQSsrKysrKyt0LnBsYW5lJTJDJTBBKysrKysrK2MubmFtZSthcytDT01QQU5ZX05BTUUlMEFGUk9NK3RyaXArdCUwQWpvaW4rY29tcGFueStjK29uK3QuY29tcGFueSslM0QrYy5pZCUwQSUwQWpvaW4rUGFzc19pbl90cmlwK3BpdCtvbitwaXQudHJpcCslM0QrdC5pZCUwQUpPSU4rcGFzc2VuZ2VyK3Arb24rcC5pZCslM0QrcGl0LnBhc3NlbmdlciUwQSUwQVdIRVJFK2MubmFtZSslM0QrJTI3YWlyX0ZyYW5jZSUyNythbmQrdC5wbGFuZSslM0QrJTI3Qm9laW5nJTI3JTBBKysrKyZkYXRhYmFzZT00ZWQyYjgwOWQ3NDQ2YjlhMGUxMDAwMDE%3D
<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 1 ЗАДАНИЯ ЗДЕСЬ -->

### Задание 2.

C помощью SELECT выведите количество пассажиров относительно каждого полета(`Pass_in_trip.trip`).
Отсортируйте записи относительно количество пассажиров в порядке убывания(от большего к меньшему).
Обязательные поля для вывода: Номер полета и Количество пассажиров.

https://sql-academy.org/sandbox?data=c3FsPVNFTEVDVCtwaXQudHJpcCUyQytjb3VudCUyOHBpdC5wYXNzZW5nZXIlMjkrYXMrQ09VTlRfUEFTUyUwQUZST00rUGFzc19pbl90cmlwK3BpdCslMEFHUk9VUCtCeStwaXQudHJpcCUwQU9SREVSK0JZK0NPVU5UX1BBU1MrREVTQysrJTBBJmRhdGFiYXNlPTRlZDJiODA5ZDc0NDZiOWEwZTEwMDAwMQ%3D%3D
<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 2 ЗАДАНИЯ ЗДЕСЬ -->

### Задание 3.

С помощью SELECT выведите количество всех пассажиров из таблицы PASSENGER, имена которых начинаются с одной и той же буквы.
Отсортируйте записи по убыванию(от большего к меньшему) относительно количества пассажиров. Показывать только те записи,
где количество больше 1. Обязательные поля для вывода: `FIRST_CHAR`(Первая буква имени) 
и `COUNT` (Количество пассажиров, имена которых начинаются с этой буквы).

https://sql-academy.org/sandbox?data=c3FsPVNFTEVDVCtsZWZ0JTI4cC5uYW1lJTJDKzElMjkrYXMrRklSU1RfQ0hBUiUyQytjb3VudCUyOGxlZnQlMjhwLm5hbWUlMkMrMSUyOSUyOSthcytDT1VOVCUwQUZST00rcGFzc2VuZ2VyK3ArJTBBR1JPVVArQlkrRklSU1RfQ0hBUitIQVZJTkcrQ09VTlQrJTNFKzElMEFPUkRFUitCWStDT1VOVCtERVNDKyUwQSZkYXRhYmFzZT00ZWQyYjgwOWQ3NDQ2YjlhMGUxMDAwMDE%3D
<!-- ЗАКРЕПИТЕ ВАШ SELECT ОТ 3 ЗАДАНИЯ ЗДЕСЬ -->

<!-- После выполнения всех заданий, необходимо сделать push в репозиторий и отправить ссылку на него -->
