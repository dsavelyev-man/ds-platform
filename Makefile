up: 
	docker compose up -d --build
down:
	docker compose down
migration-run:
	docker compose exec gateway npm run migration:run
migration-generate:
	docker compose exec gateway npm run migration:generate --name=$(name)
migration-revert:
	docker compose exec gateway npm run migration:revert
schema-drop:
	docker compose exec gateway npm run schema:drop