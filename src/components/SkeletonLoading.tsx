import { Box, Skeleton, Stack } from "@mui/material";

const SingleSkeleton = () => {
  return (
    <Stack
      spacing={1}
      sx={{
        minWidth: 90,
      }}
    >
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
    </Stack>
  );
};

const SkeletonLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {[1, 2, 3, 4, 5].map(i => (
        <SingleSkeleton key={i} />
      ))}
    </Box>
  );
};

export default SkeletonLoading;
