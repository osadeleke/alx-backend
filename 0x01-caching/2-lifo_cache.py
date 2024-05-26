#!/usr/bin/env python3
"""
Last in First Out Caching System
"""
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    """
    Last in First out caching class
    """
    def __init__(self):
        """
        initialization method
        """
        super().__init__()

    def put(self, key, item):
        """
        LIFO caching mechanism
        """
        if not key or not item:
            pass

        if key in self.cache_data:
            self.cache_data.pop(key)
            self.cache_data[key] = item
        else:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                discard_cache = self.cache_data.popitem()
                print(f'DISCARD: {discard_cache[0]}')
            self.cache_data[key] = item

    def get(self, key):
        """
        get a cache item from cache dictionary
        """
        if not key or key not in self.cache_data:
            return None
        else:
            return self.cache_data[key]
