import React from "react";

import type { PassedProps as MyButtonProps } from "@components/button";

export const directoryHeaderConfig = {
	notifications: {
		baz: {
			component: React.lazy(() => import("@components/button")),
		},
	},
};

export type DirectoryConfigType = typeof directoryHeaderConfig & MyButtonProps;
