export type HTTPErrorResponse = {
	success: false;
	error: string;
	data: null;
};

export type HTTPSuccessResponse<T = null> = {
	success: true;
	error: null;
	data: T;
};
