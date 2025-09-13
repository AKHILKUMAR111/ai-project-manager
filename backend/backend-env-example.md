# Backend Environment Variables (.env.example)

# Server Configuration
NODE_ENV=development
PORT=5000
API_BASE_URL=http://localhost:5000

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/ai-project-manager
MONGODB_TEST_URI=mongodb://localhost:27017/ai-project-manager-test

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-change-this-in-production
JWT_REFRESH_EXPIRES_IN=7d

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key-here
OPENAI_MODEL=gpt-4
OPENAI_MAX_TOKENS=2000
OPENAI_TEMPERATURE=0.7

# Redis Configuration
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=
REDIS_DB=0

# Email Configuration (for notifications and user verification)
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=AI Project Manager <noreply@yourapp.com>

# File Upload Configuration
MAX_FILE_SIZE=10485760
UPLOAD_PATH=uploads/
ALLOWED_FILE_TYPES=jpg,jpeg,png,pdf,doc,docx

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# CORS Configuration
FRONTEND_URL=http://localhost:3000
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173

# Logging Configuration
LOG_LEVEL=info
LOG_FILE=logs/app.log

# Security Configuration
BCRYPT_ROUNDS=12
COOKIE_SECRET=your-cookie-secret-key-change-this
SESSION_TIMEOUT=3600000

# Feature Flags
ENABLE_AI_FEATURES=true
ENABLE_REAL_TIME=true
ENABLE_NOTIFICATIONS=true
ENABLE_FILE_UPLOAD=true

# External Services
SENTRY_DSN=
GOOGLE_ANALYTICS_ID=

# Development/Testing
DEBUG=ai-project-manager:*
MOCK_OPENAI=false
SKIP_EMAIL_VERIFICATION=true