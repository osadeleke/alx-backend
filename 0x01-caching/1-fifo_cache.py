#!/usr/bin/env python3
"""
First in First Out Caching System
"""
from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """
    First in First out caching class
    """
    def __init__(self):
        """
        initialization method
        """
        super().__init__()

    def put(self, key, item):
        """
        FIFO caching mechanism
        """
        if not key or not item:
            pass
        else:
            self.cache_data[key] = item
            if len(self.cache_data) > BaseCaching.MAX_ITEMS:
                iterator = iter(self.cache_data)
                first_key = next(iterator)
                self.cache_data.pop(first_key)
                print(f'DISCARD: {first_key}')

    def get(self, key):
        """
        get a cache item from cache dictionary
        """
        if not key or key not in self.cache_data:
            return None
        else:
            return self.cache_data[key]
