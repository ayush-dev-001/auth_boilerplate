# 🧪 Signup Route Test Cases

This document contains the manual test cases for the `POST /signup` endpoint.

## Endpoint

```http
POST /signup
```

## Test Cases

| Status | Test Case | Input | Expected Result |
| ------ | ---------------------------------------- | ------------------------------------ | ------------------------------------- |
| ✅ | Valid signup | Valid email, username, password, age | `201 Created` |
| ✅ | Duplicate email | Existing email, new username | `409 Conflict` |
| ✅ | Duplicate username | New email, existing username | `409 Conflict` |
| ✅ | Duplicate email & username | Existing email and username | `409 Conflict` |
| ✅ | Invalid email | `"abc"` | `400 Bad Request` |
| ✅ | Missing email | No email field | `400 Bad Request` |
| ✅ | Missing password | No password | `400 Bad Request` |
| ✅ | Password too short | `"123"` | `400 Bad Request` |
| ✅ | Invalid age | `"abc"` | `400 Bad Request` |
| ✅ | Empty body | `{}` | `400 Bad Request` |
| ✅ | Optional name omitted | No name | `201 Created` |
| ✅ | Optional username omitted *(if allowed)* | No username | `201 Created` |
| ✅ | Password hashing | Valid signup | Password stored is **not** plain text |
| ✅ | Database failure | Mock DB throws error | `500 Internal Server Error` |

## Notes

- Verify that passwords are stored as **hashed values**.
- Ensure duplicate email and username checks return **409 Conflict**.
- Verify all validation errors return **400 Bad Request**.
- Ensure no password is included in the API response.
- Confirm the database enforces unique constraints on `email` and `username`.