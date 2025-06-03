import React from "react";

export const fooBaz = {
	// panics
	notifications: {
		baz: {
			component: React.lazy(() => import("@components/button")),
		},
	},
};
