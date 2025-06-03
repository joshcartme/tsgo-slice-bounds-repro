import type React from "react";
import type { DirectoryConfigType } from "@src/directory-header-config";

export interface OuterSpaceConfig {
	notifications: {
		baz: {
			component: React.FunctionComponent<any>;
		};
	};
}

export type OuterSpaceProps = DirectoryConfigType;
