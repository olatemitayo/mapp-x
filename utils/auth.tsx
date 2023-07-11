export const isAuthenticated = async (): Promise<boolean> => {
  try {
    const response = await fetch("/api/auth/check");
    const data = await response.json();

    if (response.ok) {
      return data.isAuthenticated;
    }
  } catch (error) {
    console.error("Error checking authentication status:", error);
  }

  return false;
};
