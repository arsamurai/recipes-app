export interface PaginationProps {
  totalPages: number
  siblingCount?: number
  currentPage: number
  onPageChange: (page: number) => void
}
