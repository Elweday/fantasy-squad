# Variables
FRONTEND_DIR=frontend
BACKEND_DIR=backend

# Phony targets
.PHONY: install frontend-install backend-install frontend-dev backend-dev build frontend-build backend-build clean

# Default target
all: install

# Install dependencies for both frontend and backend
install: frontend-install backend-install

frontend-install:
	cd $(FRONTEND_DIR) && pnpm install

backend-install:
	cd $(BACKEND_DIR) && pip install -r requirements.txt

# Run development servers
dev: frontend-dev backend-dev

frontend-dev:
	cd $(FRONTEND_DIR) && pnpm run dev &

backend-dev:
	cd $(BACKEND_DIR) && python -m flask run &

# Build the frontend and backend
build: frontend-build backend-build

frontend-build:
	cd $(FRONTEND_DIR) && pnpm run build

backend-build:
	# Add any backend build steps here if needed
	echo "No build steps for backend"

# Clean the build outputs
clean: frontend-clean backend-clean

frontend-clean:
	cd $(FRONTEND_DIR) && pnpm run clean

backend-clean:
	# Add any backend clean steps here if needed
	echo "No clean steps for backend"

