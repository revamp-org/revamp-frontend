import { gql } from "@apollo/client";

export const GET_GOALS = gql`
	query GetGoals($userId: ID!) {
		getGoals(userId: $userId) {
			goalId
			title
			description
			priority
			relatedArea
			order
			streak
			isActive
			deadline
			isDone
			createdAt
			updatedAt
		}
	}
`;
