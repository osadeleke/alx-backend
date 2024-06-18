#!/usr/bin/env python3
"""
Least Recently Used Caching System
"""
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """
    Least Recently Used caching class
    """
    def __init__(self):
        """
        initialization method
        """
        super().__init__()

    def put(self, key, item):
        """
        LRU caching mechanism
        """
        if not key or not item:
            pass
        elif key in self.cache_data:
            self.cache_data.pop(key)
            self.cache_data[key] = item
        else:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                oldest_key = next(iter(self.cache_data))
                print(f'DISCARD: {oldest_key[0]}')
            self.cache_data[key] = item

    def get(self, key):
        """
        get a cache item from cache dictionary
        """
        if not key or key not in self.cache_data:
            return None
        else:
            return self.cache_data[key]
