#!/usr/bin/env python3
"""
Basic Caching
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    Basic Caching Class
    """
    def put(self, key, item):
        """
        assign key and item to cache data dictionary
        """
        if not key or not item:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        """
        get a cache item from cache dictionary
        """
        if not key or key not in self.cache_data:
            return None
        else:
            return self.cache_data[key]
