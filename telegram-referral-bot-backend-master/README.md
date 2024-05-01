## API Endpoints

### User Management

- **POST `/profile/{telegram_uid}`**
  - **Description:** Create or update a user profile.
  - **Payload:** JSON with user details (e.g., `{ "name": "Jane Doe", "email": "jane@example.com" }`)
  - **Example:** 
    ```json
    {
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "telegram_username": "@jane_twitter",
    "twitter_username": "@jane_twitter",
    "twitter_uid": "4564645464",
    "wallet_address": "0xABCDEF1234567890DEFB",
    "points": 10,
    "referral_code": "REF12345",
    "is_banned": false,
    "is_admin": true
    }
    ```


- **GET `/profile/{telegram_uid}`**
  - **Description:** Fetch a user's profile details.
  - **Response Example:** 
    ```json
    {
    "_id": "6624c17ec092b4271be1bd86",
    "name": "Jane Doe",
    "email": "jane.doe@example.com",
    "telegram_username": null,
    "telegram_uid": "777777777",
    "twitter_username": "@jane_twitter",
    "twitter_uid": null,
    "wallet_address": "0xABCDEF1234567890DEFB",
    "points": 200,
    "referral_code": "REF12345",
    "is_banned": false,
    "is_admin": true
    }
    ```

### Task Management

- **POST `/admin/tasks/create`**
  - **Description:** Add a new task.
  - **Example:** 
    ```json
    {
    "task_id": "task1",
    "task_type": "onboarding",
    "description": "Join Metakraft Telegram",
    "reward": 100,
    "is_active": true
    }
    ```

### User Activity

- **POST `/useractivity/`**
  - **Description:** Log a user's completion of a task.
  - **Payload:** JSON with activity details (e.g., `{ "telegram_uid": "777777777", "task_id": "task1" }`)
  - **Example:** 
    ```json
    {"telegram_uid": "777777777", "task_id": "task2"}
    ```
