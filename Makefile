up: 
	docker compose up -d --build
down:
	docker compose down
migration-run:
	docker compose exec gateway npm run migration:run
migration-revert:
	docker compose exec gateway npm run migration:revert
