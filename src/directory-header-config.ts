import React from "react";

import type { MyWidgetProps } from "@components/widget";
import type { PassedProps as MyButtonProps } from "@components/button";

export const directoryHeaderConfig = {
	notifications: {
		foo: {
			component: React.lazy(
				() => 
                    import(
                        "@components/button"
                    ),
			),
		},
	},
};

export type DirectoryConfigType = typeof directoryHeaderConfig & 
    (MyButtonProps | MyWidgetProps);
