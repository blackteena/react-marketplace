import React, { useState, useEffect, useContext, useRef } from 'react'
import qs from 'qs'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import PizzaBlockPlaceholder from '../components/PizzaBlock/Placeholder'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'
import { setPageCount, setFilters } from '../redux/slices/filterSlice'
import { list } from '../components/Sort'
import { fetchPizzas } from '../redux/slices/pizzaSlice'

const Home = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isSearch = useRef(false)
    const isMounted = useRef(false)
    const { searcValue } = useContext(SearchContext)
    const { categoryId, sort } = useSelector(state => state.filter)
    const currentPage = useSelector(state => state.filter.pageCount)
    const {items,status} = useSelector(state => state.pizza)

    const setCurrentPage = (num) => {
        dispatch(setPageCount(num))
    }

    const getPizzas = async () => {
        dispatch(fetchPizzas({
            currentPage,
            categoryId,
            sort,
            searcValue,
        }))
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))

            const sort = list.find(obj => obj.sortProperty === params.sortProperty)

            dispatch(setFilters({
                ...params,
                sort,
            }))
            isSearch.current = true
        }

    }, [])

    useEffect(() => {
        if (!isSearch.current) {
            getPizzas()
        }

        isSearch.current = false
    }, [categoryId, sort, searcValue, currentPage])

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                sortProperty: sort.sortProperty,
                currentPage,
                categoryId,
            })
            navigate(`?${queryString}`)
        }
        isMounted.current = true
    }, [categoryId, sort, currentPage])

    return (
        <div className="container">
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {status==='loading' ? [...new Array(6)].map((_, i) => <PizzaBlockPlaceholder />)
                    :
                    items.map((pizza, i) => (
                        <PizzaBlock key={pizza.id} {...pizza}></PizzaBlock>
                    ))
                }
            </div>
            <Pagination onChangePage={setCurrentPage} />
        </div>
    )
}

export default Home

