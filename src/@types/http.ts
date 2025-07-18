export type HTTPErrorResponse = {
	success: false;
	errors: string[];
	data: null;
};

export type HTTPSuccessResponse<T = null> = {
	success: true;
	errors: null;
	data: T;
};
