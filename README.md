# Recipe App

Это фуллстек-приложение для управления рецептами, разработанное с использованием Django Rest Framework для сервера и React для клиента.

## Установка и настройка

### Предпосылки

- Python 3.6 или выше
- Node.js 14 или выше
- npm 6 или выше

### Установка сервера (Django)

1. Клонируйте репозиторий:

   
bash
   git clone <URLвашегорепозитория>
   cd recipeproject
   ```

2. Создайте и активируйте виртуальное окружение:

   ```bash
   python -m venv venv
   source venv/bin/activate  # Для Linux/Mac
   venv\Scripts\activate  # Для Windows
   ```

3. Установите зависимости:

   ```bash
   pip install -r requirements.txt
   ```

4. Примените миграции:

   ```bash
   python manage.py migrate
   ```

5. Создайте суперпользователя (по желанию):

   ```bash
   python manage.py createsuperuser
   ```

6. Запустите сервер:

   ```bash
   python manage.py runserver
   ```

### Установка клиента (React)

1. Перейдите в папку клиента:

   ```bash
   cd recipe-client
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запустите клиентское приложение:

   ```bash
   npm start
   ```

### Доступ к API

API доступно по адресу `http://127.0.0.1:8000/api/`. Вы можете получить доступ к документации API по следующим адресам:

- **Swagger UI**: [http://127.0.0.1:8000/swagger/](http://127.0.0.1:8000/swagger/)
- **ReDoc**: [http://127.0.0.1:8000/redoc/](http://127.0.0.1:8000/redoc/)

### Структура проекта

- `recipeproject/ - корневая папка проекта Django.
- recipes/ - папка с приложением Django для управления рецептами.
- recipe-client/ - папка с клиентским приложением на React.

### Использование

- Добавление категорий и рецептов осуществляется через административную панель Django.
- Пользователи могут просматривать категории и рецепты через клиентское приложение на React.
