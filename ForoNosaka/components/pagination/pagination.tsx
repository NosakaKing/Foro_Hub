"use client";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationControlsProps {
    page: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (newPage: number) => void;
}

export default function PaginationControls({
    page,
    pageSize,
    totalItems,
    onPageChange,
}: PaginationControlsProps) {
    const totalPages = Math.ceil(totalItems / pageSize);

    const handlePrevious = () => {
        if (page > 0) onPageChange(page - 1);
    };

    const handleNext = () => {
        if (page + 1 < totalPages) onPageChange(page + 1);
    };

    const getPageNumbers = () => {
        const visiblePages = 5;
        const half = Math.floor(visiblePages / 2);
        let start = Math.max(0, page - half);
        let end = Math.min(totalPages - 1, page + half);

        if (page <= half) {
            end = Math.min(totalPages - 1, visiblePages - 1);
        }
        if (page + half >= totalPages) {
            start = Math.max(0, totalPages - visiblePages);
        }

        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <Pagination className="mt-4">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        onClick={handlePrevious}
                        className={page === 0 ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>

                {getPageNumbers().map((pageNumber) => (
                    <PaginationItem
                        key={pageNumber}
                        onClick={() => onPageChange(pageNumber)}
                        className={`cursor-pointer px-3 py-1 rounded ${
                            pageNumber === page ? "bg-accent text-foreground" : "hover:bg-muted"
                        }`}
                    >
                        {pageNumber + 1}
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <PaginationNext
                        onClick={handleNext}
                        className={page + 1 >= totalPages ? "pointer-events-none opacity-50" : ""}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
