/**
 * Custom hooks
 *
 * @author Benson Maruchu<benmaruchu@gmail.com>
 * @since 0.1.0
 */

/* dependencies */
import { useEffect, useState, useCallback, useContext } from "react";
import { useToasts } from "react-toast-notifications";
//import { ConfigsContext, LocaleContext, RolesContext } from "../../configs";

/**
 * @function
 * @name useGetList
 * @description Custom hook for fetching results from the web
 * @param {Function} onGet Function to be called on fetch data event
 * @param {object} params Additional Params to be passed
 * @returns {*[]} Array which have data, functions
 * @version 0.1.0
 * @since 0.2.0
 */
export const useGetList = (onGet, params) => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [pages, setPages] = useState(0);
    const [total, setTotal] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [haveNextPage, setHaveNextPage] = useState(false);
    const [havePreviousPage, setHavePreviousPage] = useState(false);
    const [sort, sortBy] = useState(null);
    const [searchQuery, searchBy] = useState(undefined);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const [filters, filterBy] = useState(null);

    useEffect(() => {
        setLoading(true);
        onGet({ page: currentPage, sort, q: searchQuery, ...filters, ...params })
            .then((response) => {
                setResults(response.data);
                setPages(response.pagination.totalPages);
                setTotal(response.total);
                if (currentPage > 1) {
                    setHavePreviousPage(true);
                } else {
                    setHavePreviousPage(false);
                }

                if (currentPage < response.pagination.totalPages) {
                    setHaveNextPage(true);
                } else {
                    setHaveNextPage(false);
                }

                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                addToast(error.message, { appearance: "error" });
            });
    }, [currentPage, sort, filters, searchQuery, shouldRefresh]);

    const refresh = useCallback(() => setShouldRefresh(!shouldRefresh), [
        shouldRefresh,
    ]);
    return {
        results,
        pages,
        currentPage,
        havePreviousPage,
        haveNextPage,
        loading,
        total,
        setTotal,
        setCurrentPage,
        sortBy,
        searchBy,
        refresh,
        filterBy,
    };
};

/**
 * @function
 * @name useGets
 * @description Custom hook for fetching results from the web
 * @param {Function} onGet Function to be called on fetch data event
 * @param {object} params Additional Params to be passed
 * @returns {*[]} Array which have data, functions
 * @version 0.1.0
 * @since 0.2.0
 */
export const useGets = (onGet, params) => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);
    const [sort, sortBy] = useState(null);
    const [searchQuery, searchBy] = useState(undefined);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const [filters, filterBy] = useState(null);

    useEffect(() => {
        setLoading(true);
        onGet({ sort, q: searchQuery, ...filters, ...params })
            .then((response) => {
                setResults(response);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                addToast(error.message, { appearance: "error" });
            });
    }, [sort, filters, searchQuery, shouldRefresh]);

    const refresh = useCallback(() => setShouldRefresh(!shouldRefresh), [
        shouldRefresh,
    ]);

    return {
        results,
        loading,
        sortBy,
        searchBy,
        refresh,
        filterBy,
    };
};

/**
 * @function
 * @name useGet
 * @description Custom hook for getting a single result from server
 *
 * @param {string} id Resource Id
 * @param {Function} onGet Client function invoked for retrieving data
 * @returns {*[]} Array for Result and loading state
 * @version 0.2.0
 * @since 0.1.0
 */
export const useGet = (id, onGet) => {
    const { addToast } = useToasts();
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [shouldRefresh, setShouldRefresh] = useState(false);

    useEffect(() => {
        setLoading(true);

        onGet(id)
            .then((response) => {
                setResult(response);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                addToast(error.message, { appearance: "error" });
            });
    }, [shouldRefresh]);

    const refresh = useCallback(() => setShouldRefresh(!shouldRefresh), [
        shouldRefresh,
    ]);

    return { result, loading, refresh };
};

/**
 * @function
 * @name useConfigs
 * @description Configs context hooks
 *
 * @returns {object} Configs Context
 *
 * @version 0.1.0
 * @since 0.1.0
 */
// export const useConfigs = () => {
//     return useContext(ConfigsContext);
// };

// export const useLocale = () => {
//     return useContext(LocaleContext);
// };

// export const useRole = () => {
//     return useContext(RolesContext);
// };